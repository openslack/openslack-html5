import unittest2 as unittest
import sys,os
sys.path.append(os.path.abspath('../'))
class FrontendTestCases(unittest.TestCase):

    def test_frontend(self):
        page = self.app.get('/')
        self.assertEqual(page.status_code, 200)
        self.assertTrue('<3' in page.data)



if __name__ == '__main__':
    unittest.main()